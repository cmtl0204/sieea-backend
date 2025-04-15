export declare class PaginationDto {
    limit: number;
    page: number;
    search: string;
    static getOffset(limit: number, page: number): number;
}
