type FileSource = { type: 'file'; path: string };
const fileSource: FileSource = {
    type: 'file',
    path: 'some/path/to/file.csv',
};

type DBSource = { type: 'db'; connectionURL: string };
const dbSource: DBSource = {
    type: 'db',
    connectionURL: 'some-connection-url',
};

type Source = FileSource | DBSource;

const isFile = (source: Source) => {
    return source.type === 'file';
};

const loadData = (source: Source) => {
    // open + read file or reach out to database server
    // if ('path' in source) {
    //     // source.path; => connect
    //     return;
    // }
    // if (source.type == 'file') {
    if (isFile(source)) {
        // source.path; => connect
        return;
    }
    // source.connectionURL => connect
};
