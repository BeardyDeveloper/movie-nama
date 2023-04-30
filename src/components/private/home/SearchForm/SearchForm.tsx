import { Checkbox } from '@sharedComponents/Check/Check';
import { Button, ButtonVariant } from '@sharedComponents/Button/Button';
import { FormInput } from '@sharedComponents/FormInput/FormInput';
import { Category2, FilterSearch, Star1 } from 'iconsax-react';
import { FC } from 'react';
import { useRef } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import styled from 'styled-components';
import {
  SelectDefaultOptionProps,
  SelectInput,
} from '@sharedComponents/SelectInput/SelectInput';
import { movieGenresList, movieRatesList } from './helpers';

export interface SearchFormValues {
  title: string;
  rate: SelectDefaultOptionProps;
  genre: SelectDefaultOptionProps;
  year: string;
  includeAdult: boolean;
}

interface SearchFormProps {
  isLoading?: boolean;
  onSearch: (values: SearchFormValues) => void;
}

export const SearchForm: FC<SearchFormProps> = props => {
  const { isLoading, onSearch } = props;

  const formRef = useRef<HTMLFormElement>(null);

  const methods = useForm<SearchFormValues>();
  const {
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = methods;

  const onSubmit = (values: SearchFormValues): void => {
    if (Object.keys(errors).length === 0) {
      onSearch(values);
    }
  };

  return (
    <Container>
      <FormProvider {...methods}>
        <form ref={formRef}>
          <Field>
            <FormInput
              value={watch('title')}
              name="title"
              label="Title"
              validationText={errors?.title?.message}
              onClear={() => setValue('title', '')}
            />
          </Field>
          <InputGroup>
            <Column colWidth="49%">
              <Field>
                <Controller
                  control={control}
                  name="rate"
                  render={({ field: { onBlur, onChange, value, ref } }) => {
                    return (
                      <SelectInput
                        ref={ref}
                        options={movieRatesList}
                        icon={<Star1 />}
                        value={value || ''}
                        label="Rate (gte)"
                        loading={!movieRatesList}
                        onChange={onChange}
                        onBlur={onBlur}
                      />
                    );
                  }}
                />
              </Field>
            </Column>
            <Column colWidth="49%">
              <Field>
                <FormInput
                  value={watch('year')}
                  name="year"
                  label="Year"
                  validationText={errors?.year?.message}
                  onClear={() => setValue('year', '')}
                />
              </Field>
            </Column>
          </InputGroup>
          <Field>
            <Controller
              control={control}
              name="genre"
              render={({ field: { onBlur, onChange, value, ref } }) => {
                return (
                  <SelectInput
                    ref={ref}
                    isMulti
                    options={movieGenresList}
                    icon={<Category2 />}
                    value={value || ''}
                    label="Genre"
                    loading={!movieGenresList}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                );
              }}
            />
          </Field>
          <Field>
            <Controller
              control={control}
              name="includeAdult"
              render={({ field: { onChange, value } }) => {
                return (
                  <Checkbox
                    label="Include adult"
                    isSelected={value}
                    onSelect={() => onChange(!value)}
                  />
                );
              }}
            />
          </Field>
          <StyledButton
            variant={ButtonVariant.Primary}
            fullWidth
            startIcon={<FilterSearch />}
            loading={isLoading}
            onClick={handleSubmit(onSubmit)}
          >
            Search
          </StyledButton>
        </form>
      </FormProvider>
    </Container>
  );
};

interface StyledProps {
  colWidth?: string;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  & > form {
    width: 90%;
  }
`;

const InputGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const Column = styled.div<StyledProps>`
  width: ${({ colWidth }) => colWidth};
`;

const Field = styled.div`
  width: 100%;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 12px;
`;
