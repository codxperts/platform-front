import { invitationReducer, initialInviationState } from './invitation.reducer';

describe('Invitation Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = invitationReducer(initialInviationState, action);

      expect(result).toBe(initialInviationState);
    });
  });
});
