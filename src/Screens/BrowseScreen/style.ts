import { CommonColors, ResponsiveStyleSheet, Spacing } from '@/Theme';

export const styles = ResponsiveStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.xl,
    backgroundColor: '#fff',
  },
  btnLogout: {
    borderWidth: 1,
    borderColor: CommonColors.error,
  },
});
