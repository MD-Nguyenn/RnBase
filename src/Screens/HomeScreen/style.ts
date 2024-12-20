import { CommonColors, ResponsiveStyleSheet, Spacing } from '@/Theme';

export const styles = ResponsiveStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.xl,
    backgroundColor: '#e0e0e0',
  },
  btnLogout: {
    borderWidth: 1,
    borderColor: CommonColors.error,
  },
});
