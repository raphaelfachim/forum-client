export type QuestionDetailsDTO = {
    id: string,
    userId: number,
    username: string,
    title: string,
    content: Map<string, string>,
    createdAt: string,
    votesUp: number,
    votesDown: number,
}