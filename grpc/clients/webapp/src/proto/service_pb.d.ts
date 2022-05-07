import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Thread extends jspb.Message {
  getId(): string;
  setId(value: string): Thread;

  getName(): string;
  setName(value: string): Thread;

  getTotalMessages(): number;
  setTotalMessages(value: number): Thread;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Thread;
  hasTimestamp(): boolean;
  clearTimestamp(): Thread;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Thread.AsObject;
  static toObject(includeInstance: boolean, msg: Thread): Thread.AsObject;
  static serializeBinaryToWriter(message: Thread, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Thread;
  static deserializeBinaryFromReader(message: Thread, reader: jspb.BinaryReader): Thread;
}

export namespace Thread {
  export type AsObject = {
    id: string,
    name: string,
    totalMessages: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CreateThreadRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateThreadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateThreadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateThreadRequest): CreateThreadRequest.AsObject;
  static serializeBinaryToWriter(message: CreateThreadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateThreadRequest;
  static deserializeBinaryFromReader(message: CreateThreadRequest, reader: jspb.BinaryReader): CreateThreadRequest;
}

export namespace CreateThreadRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetThreadRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetThreadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetThreadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetThreadRequest): GetThreadRequest.AsObject;
  static serializeBinaryToWriter(message: GetThreadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetThreadRequest;
  static deserializeBinaryFromReader(message: GetThreadRequest, reader: jspb.BinaryReader): GetThreadRequest;
}

export namespace GetThreadRequest {
  export type AsObject = {
    id: string,
  }
}

export class Comment extends jspb.Message {
  getId(): string;
  setId(value: string): Comment;

  getThreadId(): string;
  setThreadId(value: string): Comment;

  getMessage(): string;
  setMessage(value: string): Comment;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Comment;
  hasTimestamp(): boolean;
  clearTimestamp(): Comment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Comment.AsObject;
  static toObject(includeInstance: boolean, msg: Comment): Comment.AsObject;
  static serializeBinaryToWriter(message: Comment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Comment;
  static deserializeBinaryFromReader(message: Comment, reader: jspb.BinaryReader): Comment;
}

export namespace Comment {
  export type AsObject = {
    id: string,
    threadId: string,
    message: string,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetCommentsRequest extends jspb.Message {
  getThreadId(): string;
  setThreadId(value: string): GetCommentsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCommentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCommentsRequest): GetCommentsRequest.AsObject;
  static serializeBinaryToWriter(message: GetCommentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCommentsRequest;
  static deserializeBinaryFromReader(message: GetCommentsRequest, reader: jspb.BinaryReader): GetCommentsRequest;
}

export namespace GetCommentsRequest {
  export type AsObject = {
    threadId: string,
  }
}

