// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.34.2
// 	protoc        (unknown)
// source: v1/anomaly_service.proto

package v1

import (
	_ "google.golang.org/genproto/googleapis/api/annotations"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// AnomalyType is the type of the anomaly.
type Anomaly_AnomalyType int32

const (
	// Unspecified anomaly type.
	Anomaly_ANOMALY_TYPE_UNSPECIFIED Anomaly_AnomalyType = 0
	// Instance level anomaly.
	//
	// INSTANCE_CONNECTION is the anomaly type for instance connection, e.g. the instance is down.
	Anomaly_INSTANCE_CONNECTION Anomaly_AnomalyType = 1
	// MIGRATION_SCHEMA is the anomaly type for migration schema, e.g. the migration schema in the instance is missing.
	Anomaly_MIGRATION_SCHEMA Anomaly_AnomalyType = 2
	// Database level anomaly.
	//
	// DATABASE_CONNECTION is the anomaly type for database connection, e.g. the database had been deleted.
	Anomaly_DATABASE_CONNECTION Anomaly_AnomalyType = 5
	// DATABASE_SCHEMA_DRIFT is the anomaly type for database schema drift,
	// e.g. the database schema had been changed without bytebase migration.
	Anomaly_DATABASE_SCHEMA_DRIFT Anomaly_AnomalyType = 6
)

// Enum value maps for Anomaly_AnomalyType.
var (
	Anomaly_AnomalyType_name = map[int32]string{
		0: "ANOMALY_TYPE_UNSPECIFIED",
		1: "INSTANCE_CONNECTION",
		2: "MIGRATION_SCHEMA",
		5: "DATABASE_CONNECTION",
		6: "DATABASE_SCHEMA_DRIFT",
	}
	Anomaly_AnomalyType_value = map[string]int32{
		"ANOMALY_TYPE_UNSPECIFIED": 0,
		"INSTANCE_CONNECTION":      1,
		"MIGRATION_SCHEMA":         2,
		"DATABASE_CONNECTION":      5,
		"DATABASE_SCHEMA_DRIFT":    6,
	}
)

func (x Anomaly_AnomalyType) Enum() *Anomaly_AnomalyType {
	p := new(Anomaly_AnomalyType)
	*p = x
	return p
}

func (x Anomaly_AnomalyType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Anomaly_AnomalyType) Descriptor() protoreflect.EnumDescriptor {
	return file_v1_anomaly_service_proto_enumTypes[0].Descriptor()
}

func (Anomaly_AnomalyType) Type() protoreflect.EnumType {
	return &file_v1_anomaly_service_proto_enumTypes[0]
}

func (x Anomaly_AnomalyType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Anomaly_AnomalyType.Descriptor instead.
func (Anomaly_AnomalyType) EnumDescriptor() ([]byte, []int) {
	return file_v1_anomaly_service_proto_rawDescGZIP(), []int{2, 0}
}

// AnomalySeverity is the severity of the anomaly.
type Anomaly_AnomalySeverity int32

const (
	// Unspecified anomaly severity.
	Anomaly_ANOMALY_SEVERITY_UNSPECIFIED Anomaly_AnomalySeverity = 0
	// MEDIUM is the info level anomaly severity.
	Anomaly_MEDIUM Anomaly_AnomalySeverity = 1
	// HIGH is the warning level anomaly severity.
	Anomaly_HIGH Anomaly_AnomalySeverity = 2
	// CRITICAL is the critical level anomaly severity.
	Anomaly_CRITICAL Anomaly_AnomalySeverity = 3
)

// Enum value maps for Anomaly_AnomalySeverity.
var (
	Anomaly_AnomalySeverity_name = map[int32]string{
		0: "ANOMALY_SEVERITY_UNSPECIFIED",
		1: "MEDIUM",
		2: "HIGH",
		3: "CRITICAL",
	}
	Anomaly_AnomalySeverity_value = map[string]int32{
		"ANOMALY_SEVERITY_UNSPECIFIED": 0,
		"MEDIUM":                       1,
		"HIGH":                         2,
		"CRITICAL":                     3,
	}
)

func (x Anomaly_AnomalySeverity) Enum() *Anomaly_AnomalySeverity {
	p := new(Anomaly_AnomalySeverity)
	*p = x
	return p
}

func (x Anomaly_AnomalySeverity) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Anomaly_AnomalySeverity) Descriptor() protoreflect.EnumDescriptor {
	return file_v1_anomaly_service_proto_enumTypes[1].Descriptor()
}

func (Anomaly_AnomalySeverity) Type() protoreflect.EnumType {
	return &file_v1_anomaly_service_proto_enumTypes[1]
}

func (x Anomaly_AnomalySeverity) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Anomaly_AnomalySeverity.Descriptor instead.
func (Anomaly_AnomalySeverity) EnumDescriptor() ([]byte, []int) {
	return file_v1_anomaly_service_proto_rawDescGZIP(), []int{2, 1}
}

type SearchAnomaliesRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// filter is the filter to apply on the search anomaly request,
	// follow the [ebnf](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form) syntax.
	// Only support filter by resource and type for now.
	// For example:
	// Search the anomalies of a specific resource: 'resource="instances/{instance}".'
	// Search the specified types of anomalies: 'type="MIGRATION_SCHEMA".'
	Filter string `protobuf:"bytes,1,opt,name=filter,proto3" json:"filter,omitempty"`
	// Not used. The maximum number of anomalies to return. The service may return fewer than
	// this value.
	// If unspecified, at most 50 anomalies will be returned.
	// The maximum value is 1000; values above 1000 will be coerced to 1000.
	PageSize int32 `protobuf:"varint,2,opt,name=page_size,json=pageSize,proto3" json:"page_size,omitempty"`
	// Not used. A page token, received from a previous `SearchAnomalies` call.
	// Provide this to retrieve the subsequent page.
	//
	// When paginating, all other parameters provided to `SearchAnomalies` must match
	// the call that provided the page token.
	PageToken string `protobuf:"bytes,3,opt,name=page_token,json=pageToken,proto3" json:"page_token,omitempty"`
}

func (x *SearchAnomaliesRequest) Reset() {
	*x = SearchAnomaliesRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_v1_anomaly_service_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SearchAnomaliesRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SearchAnomaliesRequest) ProtoMessage() {}

func (x *SearchAnomaliesRequest) ProtoReflect() protoreflect.Message {
	mi := &file_v1_anomaly_service_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SearchAnomaliesRequest.ProtoReflect.Descriptor instead.
func (*SearchAnomaliesRequest) Descriptor() ([]byte, []int) {
	return file_v1_anomaly_service_proto_rawDescGZIP(), []int{0}
}

func (x *SearchAnomaliesRequest) GetFilter() string {
	if x != nil {
		return x.Filter
	}
	return ""
}

func (x *SearchAnomaliesRequest) GetPageSize() int32 {
	if x != nil {
		return x.PageSize
	}
	return 0
}

func (x *SearchAnomaliesRequest) GetPageToken() string {
	if x != nil {
		return x.PageToken
	}
	return ""
}

type SearchAnomaliesResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// anomalies is the list of anomalies.
	Anomalies []*Anomaly `protobuf:"bytes,1,rep,name=anomalies,proto3" json:"anomalies,omitempty"`
	// Not used. A token, which can be sent as `page_token` to retrieve the next page.
	// If this field is omitted, there are no subsequent pages.
	NextPageToken string `protobuf:"bytes,2,opt,name=next_page_token,json=nextPageToken,proto3" json:"next_page_token,omitempty"`
}

func (x *SearchAnomaliesResponse) Reset() {
	*x = SearchAnomaliesResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_v1_anomaly_service_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SearchAnomaliesResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SearchAnomaliesResponse) ProtoMessage() {}

func (x *SearchAnomaliesResponse) ProtoReflect() protoreflect.Message {
	mi := &file_v1_anomaly_service_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SearchAnomaliesResponse.ProtoReflect.Descriptor instead.
func (*SearchAnomaliesResponse) Descriptor() ([]byte, []int) {
	return file_v1_anomaly_service_proto_rawDescGZIP(), []int{1}
}

func (x *SearchAnomaliesResponse) GetAnomalies() []*Anomaly {
	if x != nil {
		return x.Anomalies
	}
	return nil
}

func (x *SearchAnomaliesResponse) GetNextPageToken() string {
	if x != nil {
		return x.NextPageToken
	}
	return ""
}

type Anomaly struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The resource that is the target of the operation.
	// Format:
	// - Instance: instnaces/{instance}
	// - Database: instnaces/{instance}/databases/{database}
	Resource string `protobuf:"bytes,1,opt,name=resource,proto3" json:"resource,omitempty"`
	// type is the type of the anomaly.
	Type Anomaly_AnomalyType `protobuf:"varint,2,opt,name=type,proto3,enum=bytebase.v1.Anomaly_AnomalyType" json:"type,omitempty"`
	// severity is the severity of the anomaly.
	Severity Anomaly_AnomalySeverity `protobuf:"varint,3,opt,name=severity,proto3,enum=bytebase.v1.Anomaly_AnomalySeverity" json:"severity,omitempty"`
	// detail is the detail of the anomaly.
	//
	// Types that are assignable to Detail:
	//
	//	*Anomaly_InstanceConnectionDetail_
	//	*Anomaly_DatabaseConnectionDetail_
	//	*Anomaly_DatabaseSchemaDriftDetail_
	Detail     isAnomaly_Detail       `protobuf_oneof:"detail"`
	CreateTime *timestamppb.Timestamp `protobuf:"bytes,9,opt,name=create_time,json=createTime,proto3" json:"create_time,omitempty"`
	UpdateTime *timestamppb.Timestamp `protobuf:"bytes,10,opt,name=update_time,json=updateTime,proto3" json:"update_time,omitempty"`
}

func (x *Anomaly) Reset() {
	*x = Anomaly{}
	if protoimpl.UnsafeEnabled {
		mi := &file_v1_anomaly_service_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Anomaly) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Anomaly) ProtoMessage() {}

func (x *Anomaly) ProtoReflect() protoreflect.Message {
	mi := &file_v1_anomaly_service_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Anomaly.ProtoReflect.Descriptor instead.
func (*Anomaly) Descriptor() ([]byte, []int) {
	return file_v1_anomaly_service_proto_rawDescGZIP(), []int{2}
}

func (x *Anomaly) GetResource() string {
	if x != nil {
		return x.Resource
	}
	return ""
}

func (x *Anomaly) GetType() Anomaly_AnomalyType {
	if x != nil {
		return x.Type
	}
	return Anomaly_ANOMALY_TYPE_UNSPECIFIED
}

func (x *Anomaly) GetSeverity() Anomaly_AnomalySeverity {
	if x != nil {
		return x.Severity
	}
	return Anomaly_ANOMALY_SEVERITY_UNSPECIFIED
}

func (m *Anomaly) GetDetail() isAnomaly_Detail {
	if m != nil {
		return m.Detail
	}
	return nil
}

func (x *Anomaly) GetInstanceConnectionDetail() *Anomaly_InstanceConnectionDetail {
	if x, ok := x.GetDetail().(*Anomaly_InstanceConnectionDetail_); ok {
		return x.InstanceConnectionDetail
	}
	return nil
}

func (x *Anomaly) GetDatabaseConnectionDetail() *Anomaly_DatabaseConnectionDetail {
	if x, ok := x.GetDetail().(*Anomaly_DatabaseConnectionDetail_); ok {
		return x.DatabaseConnectionDetail
	}
	return nil
}

func (x *Anomaly) GetDatabaseSchemaDriftDetail() *Anomaly_DatabaseSchemaDriftDetail {
	if x, ok := x.GetDetail().(*Anomaly_DatabaseSchemaDriftDetail_); ok {
		return x.DatabaseSchemaDriftDetail
	}
	return nil
}

func (x *Anomaly) GetCreateTime() *timestamppb.Timestamp {
	if x != nil {
		return x.CreateTime
	}
	return nil
}

func (x *Anomaly) GetUpdateTime() *timestamppb.Timestamp {
	if x != nil {
		return x.UpdateTime
	}
	return nil
}

type isAnomaly_Detail interface {
	isAnomaly_Detail()
}

type Anomaly_InstanceConnectionDetail_ struct {
	InstanceConnectionDetail *Anomaly_InstanceConnectionDetail `protobuf:"bytes,4,opt,name=instance_connection_detail,json=instanceConnectionDetail,proto3,oneof"`
}

type Anomaly_DatabaseConnectionDetail_ struct {
	DatabaseConnectionDetail *Anomaly_DatabaseConnectionDetail `protobuf:"bytes,5,opt,name=database_connection_detail,json=databaseConnectionDetail,proto3,oneof"`
}

type Anomaly_DatabaseSchemaDriftDetail_ struct {
	DatabaseSchemaDriftDetail *Anomaly_DatabaseSchemaDriftDetail `protobuf:"bytes,8,opt,name=database_schema_drift_detail,json=databaseSchemaDriftDetail,proto3,oneof"`
}

func (*Anomaly_InstanceConnectionDetail_) isAnomaly_Detail() {}

func (*Anomaly_DatabaseConnectionDetail_) isAnomaly_Detail() {}

func (*Anomaly_DatabaseSchemaDriftDetail_) isAnomaly_Detail() {}

// Instance level anomaly detail.
//
// InstanceConnectionDetail is the detail for instance connection anomaly.
type Anomaly_InstanceConnectionDetail struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// detail is the detail of the instance connection failure.
	Detail string `protobuf:"bytes,1,opt,name=detail,proto3" json:"detail,omitempty"`
}

func (x *Anomaly_InstanceConnectionDetail) Reset() {
	*x = Anomaly_InstanceConnectionDetail{}
	if protoimpl.UnsafeEnabled {
		mi := &file_v1_anomaly_service_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Anomaly_InstanceConnectionDetail) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Anomaly_InstanceConnectionDetail) ProtoMessage() {}

func (x *Anomaly_InstanceConnectionDetail) ProtoReflect() protoreflect.Message {
	mi := &file_v1_anomaly_service_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Anomaly_InstanceConnectionDetail.ProtoReflect.Descriptor instead.
func (*Anomaly_InstanceConnectionDetail) Descriptor() ([]byte, []int) {
	return file_v1_anomaly_service_proto_rawDescGZIP(), []int{2, 0}
}

func (x *Anomaly_InstanceConnectionDetail) GetDetail() string {
	if x != nil {
		return x.Detail
	}
	return ""
}

// Database level anomaly detial.
//
// DatbaaseConnectionDetail is the detail for database connection anomaly.
type Anomaly_DatabaseConnectionDetail struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// detail is the detail of the database connection failure.
	Detail string `protobuf:"bytes,1,opt,name=detail,proto3" json:"detail,omitempty"`
}

func (x *Anomaly_DatabaseConnectionDetail) Reset() {
	*x = Anomaly_DatabaseConnectionDetail{}
	if protoimpl.UnsafeEnabled {
		mi := &file_v1_anomaly_service_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Anomaly_DatabaseConnectionDetail) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Anomaly_DatabaseConnectionDetail) ProtoMessage() {}

func (x *Anomaly_DatabaseConnectionDetail) ProtoReflect() protoreflect.Message {
	mi := &file_v1_anomaly_service_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Anomaly_DatabaseConnectionDetail.ProtoReflect.Descriptor instead.
func (*Anomaly_DatabaseConnectionDetail) Descriptor() ([]byte, []int) {
	return file_v1_anomaly_service_proto_rawDescGZIP(), []int{2, 1}
}

func (x *Anomaly_DatabaseConnectionDetail) GetDetail() string {
	if x != nil {
		return x.Detail
	}
	return ""
}

// DatabaseSchemaDriftDetail is the detail for database schema drift anomaly.
type Anomaly_DatabaseSchemaDriftDetail struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// record_version is the record version of the database schema drift.
	RecordVersion string `protobuf:"bytes,1,opt,name=record_version,json=recordVersion,proto3" json:"record_version,omitempty"`
	// expected_schema is the expected schema in the database.
	ExpectedSchema string `protobuf:"bytes,2,opt,name=expected_schema,json=expectedSchema,proto3" json:"expected_schema,omitempty"`
	// actual_schema is the actual schema in the database.
	ActualSchema string `protobuf:"bytes,3,opt,name=actual_schema,json=actualSchema,proto3" json:"actual_schema,omitempty"`
}

func (x *Anomaly_DatabaseSchemaDriftDetail) Reset() {
	*x = Anomaly_DatabaseSchemaDriftDetail{}
	if protoimpl.UnsafeEnabled {
		mi := &file_v1_anomaly_service_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Anomaly_DatabaseSchemaDriftDetail) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Anomaly_DatabaseSchemaDriftDetail) ProtoMessage() {}

func (x *Anomaly_DatabaseSchemaDriftDetail) ProtoReflect() protoreflect.Message {
	mi := &file_v1_anomaly_service_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Anomaly_DatabaseSchemaDriftDetail.ProtoReflect.Descriptor instead.
func (*Anomaly_DatabaseSchemaDriftDetail) Descriptor() ([]byte, []int) {
	return file_v1_anomaly_service_proto_rawDescGZIP(), []int{2, 2}
}

func (x *Anomaly_DatabaseSchemaDriftDetail) GetRecordVersion() string {
	if x != nil {
		return x.RecordVersion
	}
	return ""
}

func (x *Anomaly_DatabaseSchemaDriftDetail) GetExpectedSchema() string {
	if x != nil {
		return x.ExpectedSchema
	}
	return ""
}

func (x *Anomaly_DatabaseSchemaDriftDetail) GetActualSchema() string {
	if x != nil {
		return x.ActualSchema
	}
	return ""
}

var File_v1_anomaly_service_proto protoreflect.FileDescriptor

var file_v1_anomaly_service_proto_rawDesc = []byte{
	0x0a, 0x18, 0x76, 0x31, 0x2f, 0x61, 0x6e, 0x6f, 0x6d, 0x61, 0x6c, 0x79, 0x5f, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0b, 0x62, 0x79, 0x74, 0x65,
	0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f,
	0x61, 0x70, 0x69, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x61, 0x70,
	0x69, 0x2f, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x5f, 0x62, 0x65, 0x68, 0x61, 0x76, 0x69, 0x6f, 0x72,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d,
	0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x13, 0x76, 0x31, 0x2f, 0x61, 0x6e, 0x6e, 0x6f,
	0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x6c, 0x0a, 0x16,
	0x53, 0x65, 0x61, 0x72, 0x63, 0x68, 0x41, 0x6e, 0x6f, 0x6d, 0x61, 0x6c, 0x69, 0x65, 0x73, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x16, 0x0a, 0x06, 0x66, 0x69, 0x6c, 0x74, 0x65, 0x72,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x66, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x12, 0x1b,
	0x0a, 0x09, 0x70, 0x61, 0x67, 0x65, 0x5f, 0x73, 0x69, 0x7a, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x05, 0x52, 0x08, 0x70, 0x61, 0x67, 0x65, 0x53, 0x69, 0x7a, 0x65, 0x12, 0x1d, 0x0a, 0x0a, 0x70,
	0x61, 0x67, 0x65, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x09, 0x70, 0x61, 0x67, 0x65, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x22, 0x75, 0x0a, 0x17, 0x53, 0x65,
	0x61, 0x72, 0x63, 0x68, 0x41, 0x6e, 0x6f, 0x6d, 0x61, 0x6c, 0x69, 0x65, 0x73, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x32, 0x0a, 0x09, 0x61, 0x6e, 0x6f, 0x6d, 0x61, 0x6c, 0x69,
	0x65, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x14, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62,
	0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x41, 0x6e, 0x6f, 0x6d, 0x61, 0x6c, 0x79, 0x52, 0x09,
	0x61, 0x6e, 0x6f, 0x6d, 0x61, 0x6c, 0x69, 0x65, 0x73, 0x12, 0x26, 0x0a, 0x0f, 0x6e, 0x65, 0x78,
	0x74, 0x5f, 0x70, 0x61, 0x67, 0x65, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x0d, 0x6e, 0x65, 0x78, 0x74, 0x50, 0x61, 0x67, 0x65, 0x54, 0x6f, 0x6b, 0x65,
	0x6e, 0x22, 0xe9, 0x08, 0x0a, 0x07, 0x41, 0x6e, 0x6f, 0x6d, 0x61, 0x6c, 0x79, 0x12, 0x20, 0x0a,
	0x08, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x42,
	0x04, 0xe2, 0x41, 0x01, 0x02, 0x52, 0x08, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x12,
	0x34, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x20, 0x2e,
	0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x41, 0x6e, 0x6f, 0x6d,
	0x61, 0x6c, 0x79, 0x2e, 0x41, 0x6e, 0x6f, 0x6d, 0x61, 0x6c, 0x79, 0x54, 0x79, 0x70, 0x65, 0x52,
	0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x40, 0x0a, 0x08, 0x73, 0x65, 0x76, 0x65, 0x72, 0x69, 0x74,
	0x79, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x24, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61,
	0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x41, 0x6e, 0x6f, 0x6d, 0x61, 0x6c, 0x79, 0x2e, 0x41, 0x6e,
	0x6f, 0x6d, 0x61, 0x6c, 0x79, 0x53, 0x65, 0x76, 0x65, 0x72, 0x69, 0x74, 0x79, 0x52, 0x08, 0x73,
	0x65, 0x76, 0x65, 0x72, 0x69, 0x74, 0x79, 0x12, 0x6d, 0x0a, 0x1a, 0x69, 0x6e, 0x73, 0x74, 0x61,
	0x6e, 0x63, 0x65, 0x5f, 0x63, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x64,
	0x65, 0x74, 0x61, 0x69, 0x6c, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x2d, 0x2e, 0x62, 0x79,
	0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x41, 0x6e, 0x6f, 0x6d, 0x61, 0x6c,
	0x79, 0x2e, 0x49, 0x6e, 0x73, 0x74, 0x61, 0x6e, 0x63, 0x65, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63,
	0x74, 0x69, 0x6f, 0x6e, 0x44, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x48, 0x00, 0x52, 0x18, 0x69, 0x6e,
	0x73, 0x74, 0x61, 0x6e, 0x63, 0x65, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e,
	0x44, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x12, 0x6d, 0x0a, 0x1a, 0x64, 0x61, 0x74, 0x61, 0x62, 0x61,
	0x73, 0x65, 0x5f, 0x63, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x64, 0x65,
	0x74, 0x61, 0x69, 0x6c, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x2d, 0x2e, 0x62, 0x79, 0x74,
	0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x41, 0x6e, 0x6f, 0x6d, 0x61, 0x6c, 0x79,
	0x2e, 0x44, 0x61, 0x74, 0x61, 0x62, 0x61, 0x73, 0x65, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74,
	0x69, 0x6f, 0x6e, 0x44, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x48, 0x00, 0x52, 0x18, 0x64, 0x61, 0x74,
	0x61, 0x62, 0x61, 0x73, 0x65, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x44,
	0x65, 0x74, 0x61, 0x69, 0x6c, 0x12, 0x71, 0x0a, 0x1c, 0x64, 0x61, 0x74, 0x61, 0x62, 0x61, 0x73,
	0x65, 0x5f, 0x73, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x5f, 0x64, 0x72, 0x69, 0x66, 0x74, 0x5f, 0x64,
	0x65, 0x74, 0x61, 0x69, 0x6c, 0x18, 0x08, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x2e, 0x2e, 0x62, 0x79,
	0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x41, 0x6e, 0x6f, 0x6d, 0x61, 0x6c,
	0x79, 0x2e, 0x44, 0x61, 0x74, 0x61, 0x62, 0x61, 0x73, 0x65, 0x53, 0x63, 0x68, 0x65, 0x6d, 0x61,
	0x44, 0x72, 0x69, 0x66, 0x74, 0x44, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x48, 0x00, 0x52, 0x19, 0x64,
	0x61, 0x74, 0x61, 0x62, 0x61, 0x73, 0x65, 0x53, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x44, 0x72, 0x69,
	0x66, 0x74, 0x44, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x12, 0x41, 0x0a, 0x0b, 0x63, 0x72, 0x65, 0x61,
	0x74, 0x65, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x09, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e,
	0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x42, 0x04, 0xe2, 0x41, 0x01, 0x03, 0x52,
	0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x41, 0x0a, 0x0b, 0x75,
	0x70, 0x64, 0x61, 0x74, 0x65, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x42, 0x04, 0xe2, 0x41,
	0x01, 0x03, 0x52, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x54, 0x69, 0x6d, 0x65, 0x1a, 0x32,
	0x0a, 0x18, 0x49, 0x6e, 0x73, 0x74, 0x61, 0x6e, 0x63, 0x65, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63,
	0x74, 0x69, 0x6f, 0x6e, 0x44, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x12, 0x16, 0x0a, 0x06, 0x64, 0x65,
	0x74, 0x61, 0x69, 0x6c, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x64, 0x65, 0x74, 0x61,
	0x69, 0x6c, 0x1a, 0x32, 0x0a, 0x18, 0x44, 0x61, 0x74, 0x61, 0x62, 0x61, 0x73, 0x65, 0x43, 0x6f,
	0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x12, 0x16,
	0x0a, 0x06, 0x64, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06,
	0x64, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x1a, 0x90, 0x01, 0x0a, 0x19, 0x44, 0x61, 0x74, 0x61, 0x62,
	0x61, 0x73, 0x65, 0x53, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x44, 0x72, 0x69, 0x66, 0x74, 0x44, 0x65,
	0x74, 0x61, 0x69, 0x6c, 0x12, 0x25, 0x0a, 0x0e, 0x72, 0x65, 0x63, 0x6f, 0x72, 0x64, 0x5f, 0x76,
	0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x72, 0x65,
	0x63, 0x6f, 0x72, 0x64, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x27, 0x0a, 0x0f, 0x65,
	0x78, 0x70, 0x65, 0x63, 0x74, 0x65, 0x64, 0x5f, 0x73, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x0e, 0x65, 0x78, 0x70, 0x65, 0x63, 0x74, 0x65, 0x64, 0x53, 0x63,
	0x68, 0x65, 0x6d, 0x61, 0x12, 0x23, 0x0a, 0x0d, 0x61, 0x63, 0x74, 0x75, 0x61, 0x6c, 0x5f, 0x73,
	0x63, 0x68, 0x65, 0x6d, 0x61, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x61, 0x63, 0x74,
	0x75, 0x61, 0x6c, 0x53, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x22, 0x8e, 0x01, 0x0a, 0x0b, 0x41, 0x6e,
	0x6f, 0x6d, 0x61, 0x6c, 0x79, 0x54, 0x79, 0x70, 0x65, 0x12, 0x1c, 0x0a, 0x18, 0x41, 0x4e, 0x4f,
	0x4d, 0x41, 0x4c, 0x59, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43,
	0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x17, 0x0a, 0x13, 0x49, 0x4e, 0x53, 0x54, 0x41,
	0x4e, 0x43, 0x45, 0x5f, 0x43, 0x4f, 0x4e, 0x4e, 0x45, 0x43, 0x54, 0x49, 0x4f, 0x4e, 0x10, 0x01,
	0x12, 0x14, 0x0a, 0x10, 0x4d, 0x49, 0x47, 0x52, 0x41, 0x54, 0x49, 0x4f, 0x4e, 0x5f, 0x53, 0x43,
	0x48, 0x45, 0x4d, 0x41, 0x10, 0x02, 0x12, 0x17, 0x0a, 0x13, 0x44, 0x41, 0x54, 0x41, 0x42, 0x41,
	0x53, 0x45, 0x5f, 0x43, 0x4f, 0x4e, 0x4e, 0x45, 0x43, 0x54, 0x49, 0x4f, 0x4e, 0x10, 0x05, 0x12,
	0x19, 0x0a, 0x15, 0x44, 0x41, 0x54, 0x41, 0x42, 0x41, 0x53, 0x45, 0x5f, 0x53, 0x43, 0x48, 0x45,
	0x4d, 0x41, 0x5f, 0x44, 0x52, 0x49, 0x46, 0x54, 0x10, 0x06, 0x22, 0x57, 0x0a, 0x0f, 0x41, 0x6e,
	0x6f, 0x6d, 0x61, 0x6c, 0x79, 0x53, 0x65, 0x76, 0x65, 0x72, 0x69, 0x74, 0x79, 0x12, 0x20, 0x0a,
	0x1c, 0x41, 0x4e, 0x4f, 0x4d, 0x41, 0x4c, 0x59, 0x5f, 0x53, 0x45, 0x56, 0x45, 0x52, 0x49, 0x54,
	0x59, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12,
	0x0a, 0x0a, 0x06, 0x4d, 0x45, 0x44, 0x49, 0x55, 0x4d, 0x10, 0x01, 0x12, 0x08, 0x0a, 0x04, 0x48,
	0x49, 0x47, 0x48, 0x10, 0x02, 0x12, 0x0c, 0x0a, 0x08, 0x43, 0x52, 0x49, 0x54, 0x49, 0x43, 0x41,
	0x4c, 0x10, 0x03, 0x42, 0x08, 0x0a, 0x06, 0x64, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x32, 0x94, 0x01,
	0x0a, 0x0e, 0x41, 0x6e, 0x6f, 0x6d, 0x61, 0x6c, 0x79, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x12, 0x81, 0x01, 0x0a, 0x0f, 0x53, 0x65, 0x61, 0x72, 0x63, 0x68, 0x41, 0x6e, 0x6f, 0x6d, 0x61,
	0x6c, 0x69, 0x65, 0x73, 0x12, 0x23, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e,
	0x76, 0x31, 0x2e, 0x53, 0x65, 0x61, 0x72, 0x63, 0x68, 0x41, 0x6e, 0x6f, 0x6d, 0x61, 0x6c, 0x69,
	0x65, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x24, 0x2e, 0x62, 0x79, 0x74, 0x65,
	0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x53, 0x65, 0x61, 0x72, 0x63, 0x68, 0x41, 0x6e,
	0x6f, 0x6d, 0x61, 0x6c, 0x69, 0x65, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22,
	0x23, 0x90, 0xea, 0x30, 0x02, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x19, 0x3a, 0x01, 0x2a, 0x22, 0x14,
	0x2f, 0x76, 0x31, 0x2f, 0x61, 0x6e, 0x6f, 0x6d, 0x61, 0x6c, 0x69, 0x65, 0x73, 0x3a, 0x73, 0x65,
	0x61, 0x72, 0x63, 0x68, 0x42, 0x11, 0x5a, 0x0f, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74, 0x65,
	0x64, 0x2d, 0x67, 0x6f, 0x2f, 0x76, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_v1_anomaly_service_proto_rawDescOnce sync.Once
	file_v1_anomaly_service_proto_rawDescData = file_v1_anomaly_service_proto_rawDesc
)

func file_v1_anomaly_service_proto_rawDescGZIP() []byte {
	file_v1_anomaly_service_proto_rawDescOnce.Do(func() {
		file_v1_anomaly_service_proto_rawDescData = protoimpl.X.CompressGZIP(file_v1_anomaly_service_proto_rawDescData)
	})
	return file_v1_anomaly_service_proto_rawDescData
}

var file_v1_anomaly_service_proto_enumTypes = make([]protoimpl.EnumInfo, 2)
var file_v1_anomaly_service_proto_msgTypes = make([]protoimpl.MessageInfo, 6)
var file_v1_anomaly_service_proto_goTypes = []any{
	(Anomaly_AnomalyType)(0),                  // 0: bytebase.v1.Anomaly.AnomalyType
	(Anomaly_AnomalySeverity)(0),              // 1: bytebase.v1.Anomaly.AnomalySeverity
	(*SearchAnomaliesRequest)(nil),            // 2: bytebase.v1.SearchAnomaliesRequest
	(*SearchAnomaliesResponse)(nil),           // 3: bytebase.v1.SearchAnomaliesResponse
	(*Anomaly)(nil),                           // 4: bytebase.v1.Anomaly
	(*Anomaly_InstanceConnectionDetail)(nil),  // 5: bytebase.v1.Anomaly.InstanceConnectionDetail
	(*Anomaly_DatabaseConnectionDetail)(nil),  // 6: bytebase.v1.Anomaly.DatabaseConnectionDetail
	(*Anomaly_DatabaseSchemaDriftDetail)(nil), // 7: bytebase.v1.Anomaly.DatabaseSchemaDriftDetail
	(*timestamppb.Timestamp)(nil),             // 8: google.protobuf.Timestamp
}
var file_v1_anomaly_service_proto_depIdxs = []int32{
	4, // 0: bytebase.v1.SearchAnomaliesResponse.anomalies:type_name -> bytebase.v1.Anomaly
	0, // 1: bytebase.v1.Anomaly.type:type_name -> bytebase.v1.Anomaly.AnomalyType
	1, // 2: bytebase.v1.Anomaly.severity:type_name -> bytebase.v1.Anomaly.AnomalySeverity
	5, // 3: bytebase.v1.Anomaly.instance_connection_detail:type_name -> bytebase.v1.Anomaly.InstanceConnectionDetail
	6, // 4: bytebase.v1.Anomaly.database_connection_detail:type_name -> bytebase.v1.Anomaly.DatabaseConnectionDetail
	7, // 5: bytebase.v1.Anomaly.database_schema_drift_detail:type_name -> bytebase.v1.Anomaly.DatabaseSchemaDriftDetail
	8, // 6: bytebase.v1.Anomaly.create_time:type_name -> google.protobuf.Timestamp
	8, // 7: bytebase.v1.Anomaly.update_time:type_name -> google.protobuf.Timestamp
	2, // 8: bytebase.v1.AnomalyService.SearchAnomalies:input_type -> bytebase.v1.SearchAnomaliesRequest
	3, // 9: bytebase.v1.AnomalyService.SearchAnomalies:output_type -> bytebase.v1.SearchAnomaliesResponse
	9, // [9:10] is the sub-list for method output_type
	8, // [8:9] is the sub-list for method input_type
	8, // [8:8] is the sub-list for extension type_name
	8, // [8:8] is the sub-list for extension extendee
	0, // [0:8] is the sub-list for field type_name
}

func init() { file_v1_anomaly_service_proto_init() }
func file_v1_anomaly_service_proto_init() {
	if File_v1_anomaly_service_proto != nil {
		return
	}
	file_v1_annotation_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_v1_anomaly_service_proto_msgTypes[0].Exporter = func(v any, i int) any {
			switch v := v.(*SearchAnomaliesRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_v1_anomaly_service_proto_msgTypes[1].Exporter = func(v any, i int) any {
			switch v := v.(*SearchAnomaliesResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_v1_anomaly_service_proto_msgTypes[2].Exporter = func(v any, i int) any {
			switch v := v.(*Anomaly); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_v1_anomaly_service_proto_msgTypes[3].Exporter = func(v any, i int) any {
			switch v := v.(*Anomaly_InstanceConnectionDetail); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_v1_anomaly_service_proto_msgTypes[4].Exporter = func(v any, i int) any {
			switch v := v.(*Anomaly_DatabaseConnectionDetail); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_v1_anomaly_service_proto_msgTypes[5].Exporter = func(v any, i int) any {
			switch v := v.(*Anomaly_DatabaseSchemaDriftDetail); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	file_v1_anomaly_service_proto_msgTypes[2].OneofWrappers = []any{
		(*Anomaly_InstanceConnectionDetail_)(nil),
		(*Anomaly_DatabaseConnectionDetail_)(nil),
		(*Anomaly_DatabaseSchemaDriftDetail_)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_v1_anomaly_service_proto_rawDesc,
			NumEnums:      2,
			NumMessages:   6,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_v1_anomaly_service_proto_goTypes,
		DependencyIndexes: file_v1_anomaly_service_proto_depIdxs,
		EnumInfos:         file_v1_anomaly_service_proto_enumTypes,
		MessageInfos:      file_v1_anomaly_service_proto_msgTypes,
	}.Build()
	File_v1_anomaly_service_proto = out.File
	file_v1_anomaly_service_proto_rawDesc = nil
	file_v1_anomaly_service_proto_goTypes = nil
	file_v1_anomaly_service_proto_depIdxs = nil
}
