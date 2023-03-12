/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Games } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GamesUpdateFormInputValues = {
    user_id?: string;
    game_variant?: string;
};
export declare type GamesUpdateFormValidationValues = {
    user_id?: ValidationFunction<string>;
    game_variant?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GamesUpdateFormOverridesProps = {
    GamesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    user_id?: PrimitiveOverrideProps<TextFieldProps>;
    game_variant?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GamesUpdateFormProps = React.PropsWithChildren<{
    overrides?: GamesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    games?: Games;
    onSubmit?: (fields: GamesUpdateFormInputValues) => GamesUpdateFormInputValues;
    onSuccess?: (fields: GamesUpdateFormInputValues) => void;
    onError?: (fields: GamesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GamesUpdateFormInputValues) => GamesUpdateFormInputValues;
    onValidate?: GamesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GamesUpdateForm(props: GamesUpdateFormProps): React.ReactElement;
