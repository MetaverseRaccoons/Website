export interface CreateAccountRequest {
    username: string;
    password_1: string;
    password_2: string;
    password: string;
    email: string;
    national_registration_number: string;
    is_learner: boolean;
    is_instructor: boolean;
    has_drivers_license: boolean;
    is_shareable: boolean;
}

interface UserResponse {
    username: string;
    email: string;
    is_learner: boolean;
    is_instructor: boolean;
    has_drivers_license: boolean;
    is_shareable: boolean;
}

interface CreateAccountResponse {
    user: UserResponse;
    refresh: string;
    access: string;
}

const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL || "";

export async function createAccount(data: CreateAccountRequest): Promise<CreateAccountResponse> {
    // Convert data to form data
    const formData = new FormData();
    for(const key in data) {
        formData.append(key, (data as any)[key]);
    }

    const response = await fetch(`${baseUrl}/api/user`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: formData,
    });
    return response.json();
}

interface CreateTokenRequest {
    username: string;
    password: string;
}

interface CreateTokenResponse {
    refresh: string;
    access: string;
}

export async function createToken(data: CreateTokenRequest): Promise<CreateTokenResponse> {
    const response = await fetch(`${baseUrl}/api/token/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return response.json();
}

export async function refreshToken(refresh: string): Promise<CreateTokenResponse> {
    const response = await fetch(`${baseUrl}/api/token/refresh/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refresh }),
    });
    return response.json();
}

export async function getPersonalUser(accessToken: string): Promise<UserResponse> {
    const response = await fetch(`${baseUrl}/api/user/`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
    });
    return response.json();
}

export async function getUser(username: string, accessToken: string): Promise<UserResponse> {
    const response = await fetch(`${baseUrl}/api/user/${username}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
    });
    return response.json();
}
