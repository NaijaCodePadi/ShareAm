export const fileBytesToSize = (file) => {
    const fileSizeInBytes = file.size;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (fileSizeInBytes === 0) return '0 Byte';
    const i = Math.floor(Math.log(fileSizeInBytes) / Math.log(1024));
    return (fileSizeInBytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i];
}

export const fileNameWithExtention = (file) => {
    const nameWithExtention = file.name;
    return nameWithExtention
}

export const getFileNameWithoutExtension = (fileFullName) => {
    // const fileName = file.name;
    const lastDotIndex = fileFullName.lastIndexOf('.');
    if (lastDotIndex === -1) {
        return fileFullName;
    }
    return fileFullName.slice(0, lastDotIndex);
}

export const getFileExtensionSafe = (fileFullName) => {
    // const filename = file.name;
    const lastDotIndex = fileFullName.lastIndexOf('.');
    if (lastDotIndex !== -1) {
        return fileFullName.substring(lastDotIndex + 1);
    } else {
        return '';
    }
} 