/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Builds } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function BuildsUpdateForm(props) {
  const {
    id: idProp,
    builds,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    game_id: "",
    player_color: "",
    turn_number: "",
    resource: "",
    roll_value: "",
  };
  const [game_id, setGame_id] = React.useState(initialValues.game_id);
  const [player_color, setPlayer_color] = React.useState(
    initialValues.player_color
  );
  const [turn_number, setTurn_number] = React.useState(
    initialValues.turn_number
  );
  const [resource, setResource] = React.useState(initialValues.resource);
  const [roll_value, setRoll_value] = React.useState(initialValues.roll_value);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = buildsRecord
      ? { ...initialValues, ...buildsRecord }
      : initialValues;
    setGame_id(cleanValues.game_id);
    setPlayer_color(cleanValues.player_color);
    setTurn_number(cleanValues.turn_number);
    setResource(cleanValues.resource);
    setRoll_value(cleanValues.roll_value);
    setErrors({});
  };
  const [buildsRecord, setBuildsRecord] = React.useState(builds);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Builds, idProp) : builds;
      setBuildsRecord(record);
    };
    queryData();
  }, [idProp, builds]);
  React.useEffect(resetStateValues, [buildsRecord]);
  const validations = {
    game_id: [{ type: "Required" }],
    player_color: [{ type: "Required" }],
    turn_number: [{ type: "Required" }],
    resource: [{ type: "Required" }],
    roll_value: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          game_id,
          player_color,
          turn_number,
          resource,
          roll_value,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Builds.copyOf(buildsRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "BuildsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Game id"
        isRequired={true}
        isReadOnly={false}
        value={game_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              game_id: value,
              player_color,
              turn_number,
              resource,
              roll_value,
            };
            const result = onChange(modelFields);
            value = result?.game_id ?? value;
          }
          if (errors.game_id?.hasError) {
            runValidationTasks("game_id", value);
          }
          setGame_id(value);
        }}
        onBlur={() => runValidationTasks("game_id", game_id)}
        errorMessage={errors.game_id?.errorMessage}
        hasError={errors.game_id?.hasError}
        {...getOverrideProps(overrides, "game_id")}
      ></TextField>
      <TextField
        label="Player color"
        isRequired={true}
        isReadOnly={false}
        value={player_color}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              game_id,
              player_color: value,
              turn_number,
              resource,
              roll_value,
            };
            const result = onChange(modelFields);
            value = result?.player_color ?? value;
          }
          if (errors.player_color?.hasError) {
            runValidationTasks("player_color", value);
          }
          setPlayer_color(value);
        }}
        onBlur={() => runValidationTasks("player_color", player_color)}
        errorMessage={errors.player_color?.errorMessage}
        hasError={errors.player_color?.hasError}
        {...getOverrideProps(overrides, "player_color")}
      ></TextField>
      <TextField
        label="Turn number"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={turn_number}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              game_id,
              player_color,
              turn_number: value,
              resource,
              roll_value,
            };
            const result = onChange(modelFields);
            value = result?.turn_number ?? value;
          }
          if (errors.turn_number?.hasError) {
            runValidationTasks("turn_number", value);
          }
          setTurn_number(value);
        }}
        onBlur={() => runValidationTasks("turn_number", turn_number)}
        errorMessage={errors.turn_number?.errorMessage}
        hasError={errors.turn_number?.hasError}
        {...getOverrideProps(overrides, "turn_number")}
      ></TextField>
      <TextField
        label="Resource"
        isRequired={true}
        isReadOnly={false}
        value={resource}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              game_id,
              player_color,
              turn_number,
              resource: value,
              roll_value,
            };
            const result = onChange(modelFields);
            value = result?.resource ?? value;
          }
          if (errors.resource?.hasError) {
            runValidationTasks("resource", value);
          }
          setResource(value);
        }}
        onBlur={() => runValidationTasks("resource", resource)}
        errorMessage={errors.resource?.errorMessage}
        hasError={errors.resource?.hasError}
        {...getOverrideProps(overrides, "resource")}
      ></TextField>
      <TextField
        label="Roll value"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={roll_value}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              game_id,
              player_color,
              turn_number,
              resource,
              roll_value: value,
            };
            const result = onChange(modelFields);
            value = result?.roll_value ?? value;
          }
          if (errors.roll_value?.hasError) {
            runValidationTasks("roll_value", value);
          }
          setRoll_value(value);
        }}
        onBlur={() => runValidationTasks("roll_value", roll_value)}
        errorMessage={errors.roll_value?.errorMessage}
        hasError={errors.roll_value?.hasError}
        {...getOverrideProps(overrides, "roll_value")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || builds)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || builds) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
