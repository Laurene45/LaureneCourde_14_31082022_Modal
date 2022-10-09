import {render,screen,fireEvent} from '@testing-library/react';
import Modal from '.';

describe('Given Modal component', () => {
  describe('When I click on button of modal', () => {
    test('Then a event should be triggered if onclose props is defined', () => {
      const mockCallBack = jest.fn();
      render(<Modal show={true} onClose={mockCallBack} />);
      fireEvent.click(screen.getByTestId('close-button'));
      expect(mockCallBack).toHaveBeenCalled();
      expect(mockCallBack).toHaveBeenCalledTimes(1);
    });

    test('Then it should throw an error if onclose props is not defined', () => {
      expect(() => {
        render(<Modal show={true} />);
      }).toThrow();
    });
  });

  describe('When I use the Modal component and set props show to true ', () => {
    beforeEach(() => {
      render(
        <Modal
          show={true}
          title={'test-title'}
          footer={'test-footer'}
          onClose={() => {}}
        >
          Children
        </Modal>
      );
    });

    test('Then my Modal should be visible', () => {
      expect(screen.getByTestId('modal')).toBeTruthy();
    });

    test('Then text body should be displayed', () => {
      expect(screen.queryByText('Children')).toBeTruthy();
    });

    test('Then text title should be displayed', () => {
      expect(screen.queryByText('test-title')).toBeTruthy();
    });

    test('Then footer should be displayed', () => {
      expect(screen.queryByText('test-footer')).toBeTruthy();
    });
  });

  describe('When I use the Modal component and set props show to false ', () => {
    beforeEach(() => {
      render(
        <Modal
          show={false}
          title={'test-title'}
          footer={'test-footer'}
          onClose={() => {}}
        >
          Children
        </Modal>
      );
    });

    test('Then my Modal should not be visible', () => {
      expect(screen.queryByTestId('modal')).toBeNull();
    });

    test('Then text body should be displayed', () => {
      expect(screen.queryByText('Children')).toBeFalsy();
    });

    test('Then text title should be displayed', () => {
      expect(screen.queryByText('test-title')).toBeFalsy();
    });

    test('Then footer should be displayed', () => {
      expect(screen.queryByText('test-footer')).toBeFalsy();
    });
  });
});
