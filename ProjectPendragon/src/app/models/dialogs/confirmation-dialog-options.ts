export class ConfirmationDialogOptions {
    title!: string;
    message!: string;
    confirmText!: string;
    cancelText: string | undefined;
    cancelDanger!: boolean;
    confirmDanger!: boolean;
}