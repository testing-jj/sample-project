export async function login(email: string, password: string) {
  try {
    const result = await authenticate(email, password);
    return { success: true, user: result.user };
  } catch (error) {
    // Improved error messages for better UX
    return { success: false, error: formatAuthError(error) };
  }
}