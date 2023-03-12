/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BuildsCreateFormInputValues = {
    game_id?: string;
    player_color?: string;
    turn_number?: number;
    resource?: string;
    roll_value?: number;
};
export declare type BuildsCreateFormValidationValues = {
    game_id?: ValidationFunction<string>;
    player_color?: ValidationFunction<string>;
    turn_number?: ValidationFunction<number>;
    resource?: ValidationFunction<string>;
    roll_value?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BuildsCreateFormOverridesProps = {
    BuildsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    game_id?: PrimitiveOverrideProps<TextFieldProps>;
    player_color?: PrimitiveOverrideProps<TextFieldProps>;
    turn_number?: PrimitiveOverrideProps<TextFieldProps>;
    resource?: PrimitiveOverrideProps<TextFieldProps>;
    roll_value?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BuildsCreateFormProps = React.PropsWithChildren<{
    overrides?: BuildsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BuildsCreateFormInputValues) => BuildsCreateFormInputValues;
    onSuccess?: (fields: BuildsCreateFormInputValues) => void;
    onError?: (fields: BuildsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BuildsCreateFormInputValues) => BuildsCreateFormInputValues;
    onValidate?: BuildsCreateFormValidationValues;
} & React.CSSProperties>;
export default function BuildsCreateForm(props: BuildsCreateFormProps): React.ReactElement;
