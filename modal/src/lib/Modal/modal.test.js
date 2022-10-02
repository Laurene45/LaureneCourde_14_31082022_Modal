import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '../../lib/Modal/Modal';

describe('Given I am a developper', () => {
  describe('When I use the Modal component and set props show to true ', () => {
    //Modal visible
    test('Then my Modal should be visible', () => {
      render(<Modal show={true} />);
      expect(screen.getByTestId('modal')).toBeTruthy();
    });
  });
});

describe('Given I am a user and the modal is visible', () => {
  describe("When I click on modal's button", () => {
    //event on button
    test('Then a event should be trigger', () => {
      const mockCallBack = jest.fn();
      render(<Modal show={true} onClose={mockCallBack} />);
      fireEvent.click(screen.getByTestId('close-button'));
      expect(mockCallBack).toHaveBeenCalled();
    });
  });
});

describe('Given I am a developper', () => {
  describe('When the Modal component show true ', () => {
    //title show
    test('Then a title should display', () => {
      render(<Modal title={'success'} />);
      expect(screen.queryByText('success')).toBeNull();
    });
  });
});

describe('Given I am a developper', () => {
  describe('When the Modal component show true ', () => {
    //text body show
    test('Then text body should display', () => {
      render(<Modal children={'votre message'} />);
      expect(screen.queryByText('votre message')).toBeNull();
    });
  });
});
