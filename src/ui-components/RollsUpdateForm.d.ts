/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Rolls } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RollsUpdateFormInputValues = {
    game_id?: string;
    turn_number?: number;
    red_value?: number;
    yellow_value?: number;
    die_color?: string;
};
export declare type RollsUpdateFormValidationValues = {
    game_id?: ValidationFunction<string>;
    turn_number?: ValidationFunction<number>;
    red_value?: ValidationFunction<number>;
    yellow_value?: ValidationFunction<number>;
    die_color?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RollsUpdateFormOverridesProps = {
    RollsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    game_id?: PrimitiveOverrideProps<TextFieldProps>;
    turn_number?: PrimitiveOverrideProps<TextFieldProps>;
    red_value?: PrimitiveOverrideProps<TextFieldProps>;
    yellow_value?: PrimitiveOverrideProps<TextFieldProps>;
    die_color?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RollsUpdateFormProps = React.PropsWithChildren<{
    overrides?: RollsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    rolls?: Rolls;
    onSubmit?: (fields: RollsUpdateFormInputValues) => RollsUpdateFormInputValues;
    onSuccess?: (fields: RollsUpdateFormInputValues) => void;
    onError?: (fields: RollsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RollsUpdateFormInputValues) => RollsUpdateFormInputValues;
    onValidate?: RollsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RollsUpdateForm(props: RollsUpdateFormProps): React.ReactElement;
