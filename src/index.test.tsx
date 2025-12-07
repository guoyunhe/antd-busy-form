import { render, screen } from '@testing-library/react';
import { AntdBusyForm } from '.';

describe('AntdBusyForm', () => {
  it('render', async () => {
    render(<AntdBusyForm>foobar</AntdBusyForm>);
    await screen.findByText('foobar');
  });
});
