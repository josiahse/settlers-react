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
export declare type RollsCreateFormInputValues = {
    game_id?: string;
    turn_number?: number;
    red_value?: number;
    yellow_value?: number;
    die_color?: string;
};
export declare type RollsCreateFormValidationValues = {
    game_id?: ValidationFunction<string>;
    turn_number?: ValidationFunction<number>;
    red_value?: ValidationFunction<number>;
    yellow_value?: ValidationFunction<number>;
    die_color?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RollsCreateFormOverridesProps = {
    RollsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    game_id?: PrimitiveOverrideProps<TextFieldProps>;
    turn_number?: PrimitiveOverrideProps<TextFieldProps>;
    red_value?: PrimitiveOverrideProps<TextFieldProps>;
    yellow_value?: PrimitiveOverrideProps<TextFieldProps>;
    die_color?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RollsCreateFormProps = React.PropsWithChildren<{
    overrides?: RollsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RollsCreateFormInputValues) => RollsCreateFormInputValues;
    onSuccess?: (fields: RollsCreateFormInputValues) => void;
    onError?: (fields: RollsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RollsCreateFormInputValues) => RollsCreateFormInputValues;
    onValidate?: RollsCreateFormValidationValues;
} & React.CSSProperties>;
export default function RollsCreateForm(props: RollsCreateFormProps): React.ReactElement;
