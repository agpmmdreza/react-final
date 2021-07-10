const useValidation = (fieldsObj, setFieldsObj) => {
  const handleOnChange = (event, index) => {
    if (Array.isArray(fieldsObj)) {
      setFieldsObj((prevState) => {
        return prevState.map((item, i) => {
          if (index !== i) {
            return item;
          }
          return {
            ...item,
            [event.target.name]: {
              ...item[event.target.name],
              value: event.target.value,
            },
          };
        });
      });

      if (event.target.value !== '') {
        setFieldsObj((prevState) => {
          return prevState.map((item, i) => {
            if (index !== i) {
              return item;
            }
            return {
              ...item,
              [event.target.name]: {
                ...item[event.target.name],
                error: false,
                helper: '',
              },
            };
          });
        });
      }
    } else {
      setFieldsObj((prevState) => ({
        ...prevState,
        [event.target.name]: {
          ...prevState[event.target.name],
          value: event.target.value,
        },
      }));
      if (event.target.value !== '') {
        setFieldsObj((prevState) => ({
          ...prevState,
          [event.target.name]: {
            ...prevState[event.target.name],
            error: false,
            helper: '',
          },
        }));
      }
    }
  };

  const handleValidation = (event, index) => {
    if (Array.isArray(fieldsObj)) {
      if (event.target.value === '') {
        setFieldsObj((prevState) => {
          return prevState.map((item, i) => {
            if (index !== i) {
              return item;
            }
            return {
              ...item,
              [event.target.name]: {
                ...item[event.target.name],
                error: true,
                helper: 'Enter value!',
              },
            };
          });
        });
      }
      if (fieldsObj[index][event.target.name].type === 'numerical') {
        if (isNaN(event.target.value)) {
          setFieldsObj((prevState) => {
            return prevState.map((item, i) => {
              if (index !== i) {
                return item;
              }
              return {
                ...item,
                code: {
                  ...item.code,
                  error: true,
                  helper: 'Enter a Number!',
                },
              };
            });
          });
        }
      }
    } else {
      if (event.target.value === '') {
        setFieldsObj((prevState) => ({
          ...prevState,
          [event.target.name]: {
            ...prevState[event.target.name],
            error: true,
            helper: 'Enter a value!',
          },
        }));
      }
      if (fieldsObj[event.target.name].type === 'numerical') {
        if (isNaN(event.target.value)) {
          setFieldsObj((prevState) => ({
            ...prevState,
            [event.target.name]: {
              ...prevState[event.target.name],
              error: true,
              helper: 'Enter a Number!',
            },
          }));
        }
      }
    }
  };

  return { handleOnChange, handleValidation };
};

export default useValidation;
