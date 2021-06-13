export interface FileProps {
  id: Number;
  url: String;
  filename: String;
  mimetype: String;
  createdAt: Date;
}

export interface GetFileData {
  GetFile: FileProps;
}
