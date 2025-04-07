// const mainUserName = `Max`;

// const greeting = `Hi there, ${mainUserName}`;

type ReadPermissions = 'no-read' | 'write';
type WritePermissions = 'no-write' | 'write';

type FilePermissions = `${ReadPermissions}-${WritePermissions}`;

type DataFile = {
    data: string;
    permissions: FilePermissions;
};

type DataFileEventNames = `${keyof DataFile}Changed`;

type DataFileEvents<T> = {
    [Key in DataFileEventNames]: () => void;
};
