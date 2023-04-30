import { Checkbox } from '@sharedComponents/Check/Check';
import { Button, ButtonVariant } from '@sharedComponents/Button/Button';
import { FormInput } from '@sharedComponents/FormInput/FormInput';
import { Category2, FilterSearch, Sort, Star1 } from 'iconsax-react';
import { FC } from 'react';
import { useRef } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import styled from 'styled-components';
import {
  SelectDefaultOptionProps,
  SelectInput,
} from '@sharedComponents/SelectInput/SelectInput';
import { movieGenresList, movieRatesList, movieSortsList } from './helpers';
import { DatePicker } from '@sharedComponents/DatePicker/DatePicker';
import { DiscoverMoviesProps } from '@/services/queries/discoverMovies';

export interface MovieSearchFormValues {
  sort: SelectDefaultOptionProps;
  rate: SelectDefaultOptionProps;
  genres: SelectDefaultOptionProps[];
  year: Date;
  includeAdult: boolean;
}

interface SearchFormProps {
  isLoading?: boolean;
  onSearch: (values: DiscoverMoviesProps) => void;
}

export const SearchForm: FC<SearchFormProps> = props => {
  const { isLoading, onSearch } = props;

  const formRef = useRef<HTMLFormElement>(null);

  const methods = useForm<MovieSearchFormValues>();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const onSubmit = (values: MovieSearchFormValues): void => {
    if (Object.keys(errors).length === 0) {
      const result = {
        sort: values.sort ? values.sort.value : '',
        rate: values.rate ? values.rate.value : '',
        genres: values.genres
          ? values.genres.map(genre => genre.id).join(',')
          : '',
        year: values.year ?? '',
        includeAdult: values.includeAdult ?? false,
      };

      onSearch(result);
    }
  };

  return (
    <Container>
      <FormProvider {...methods}>
        <form ref={formRef}>
          <Field>
            <Controller
              control={control}
              name="sort"
              render={({ field: { onBlur, onChange, value, ref } }) => {
                return (
                  <SelectInput
                    ref={ref}
                    options={movieSortsList}
                    icon={<Sort />}
                    value={value || ''}
                    label="Sort type"
                    placeholder="select a sort type"
                    loading={!movieRatesList}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                );
              }}
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
                        placeholder="select a rate"
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
                <Controller
                  control={control}
                  name="year"
                  render={({ field: { onChange, value, ref } }) => {
                    return (
                      <DatePicker
                        ref={ref}
                        value={value || ''}
                        placeholder="pick a date"
                        label="Release date (gte)"
                        onChange={date => onChange(date?.toDate())}
                      />
                    );
                  }}
                />
              </Field>
            </Column>
          </InputGroup>
          <Field>
            <Controller
              control={control}
              name="genres"
              render={({ field: { onBlur, onChange, value, ref } }) => {
                return (
                  <SelectInput
                    ref={ref}
                    isMulti
                    options={movieGenresList}
                    icon={<Category2 />}
                    value={value || ''}
                    label="Genre"
                    placeholder="select the genres"
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
