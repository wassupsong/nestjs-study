export interface BoardModel {
    id: string;
    title: string;
    description: string;
    status: BoardStatusModel;
}
export declare enum BoardStatusModel {
    PUBLIC = "PUBLIC",
    PRIVATE = "PRIVATE"
}
