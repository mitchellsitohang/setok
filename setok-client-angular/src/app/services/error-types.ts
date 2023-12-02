export enum ErrorMessageType {
    Required = 'You must enter a value',
    RepeatPass = 'Please repeat the password.',
    Taury = 'taury',
    IsTaury = 'WHO IS THE KING?!',
    Numeric = 'Must be a numeric value',
    Email = 'Not a valid email address',
    MinChars = 'The minimum amount characters is 8.'
}

export interface ErrorMessage {
    message: string;
}