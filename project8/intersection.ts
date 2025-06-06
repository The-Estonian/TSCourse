type FileData = {
    path: string;
    content: string;
};

type DatabaseData = {
    connectionUrl: string;
    credentials: string;
};

type Status = {
    isOpen: boolean;
    errorMessage?: string;
};

type AccessedFileData = FileData & Status; // interface AccessedFileData extends FileData, Status {}
type AccessedDatabaseData = DatabaseData & Status;
