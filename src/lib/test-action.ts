'use server';

export async function testPing(formData: FormData) {
    console.log("PING RECEIVED on SERVER");
    return { success: true, message: "Pong" };
}
