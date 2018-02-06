export class User {
    constructor(
        public email: string,
        public password: string,
        public firstName?: string,
        public lastName?: string,
        public mobile?: number,
        public dob?: string,
        public address?: string
    ) { }
}