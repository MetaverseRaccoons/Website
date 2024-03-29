export interface CreateAccountRequest {
    username: string;
    password1: string;
    password2: string;
    email: string;
    national_registration_number: string;
    is_learner: boolean;
    is_instructor: boolean;
    has_drivers_license: boolean;
    is_shareable: boolean;
}

export interface CertificatesScheme {
    title: string;
    description: string;
}

export interface LevelSessionScheme {
    level: {
        name: string;
        description: string;
    };
    start_time: string;
    end_time: string;
    completed: boolean;
}

export interface UserResponse {
    username: string;
    email: string;
    is_learner: boolean;
    is_instructor: boolean;
    has_drivers_license: boolean;
    is_shareable: boolean;
    km_driven: number;
    minutes_driven: number;
    certificates: CertificatesScheme[];
    level_sessions: LevelSessionScheme[];
    violations: {
        time: string;
        type: string;
        severity: number;
        description: string;
    }[];
}

export interface CreateAccountResponse {
    user: UserResponse;
    refresh: string;
    access: string;
}

export interface FriendRelation {
    from_user: UserResponse;
    to_user: UserResponse;
    accepted: boolean;
}

export type FriendsResponse = FriendRelation[];

export interface Violation {
    type: string;
    severity: number;
    description: string;
    date: string;
}

interface Successful {
    success: boolean;
}
interface MessageResponse {
    message: string;
}

export enum Order {
    Ascending,
    Descending,
}

const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL || "";

export async function createAccount(data: CreateAccountRequest): Promise<CreateAccountResponse> {
    const response = await fetch(`${baseUrl}/api/user/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
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
    if(!response.ok) {
        throw new Error("Invalid username or password");
    }
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
    const response = await fetch(`${baseUrl}/api/user/${username}/`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
    });
    return response.json();
}

export async function sendFriendRequest(toUsername: string, accessToken: string): Promise<MessageResponse & Successful> {
    const response = await fetch(`${baseUrl}/api/friend/request/${toUsername}/send/`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
    });
    const json: MessageResponse = await response.json();
    return {
        success: response.ok,
        message: json.message,
    };
}

export async function acceptFriendRequest(fromUsername: string, accessToken: string): Promise<MessageResponse & Successful> {
    const response = await fetch(`${baseUrl}/api/friend/request/${fromUsername}/accept/`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
    });
    const json: MessageResponse = await response.json();
    return {
        success: response.ok,
        message: json.message,
    };
}

export async function declineFriendRequest(fromUsername: string, accessToken: string): Promise<MessageResponse & Successful> {
    const response = await fetch(`${baseUrl}/api/friend/request/${fromUsername}/decline/`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
    });
    const json: MessageResponse = await response.json();
    return {
        success: response.ok,
        message: json.message,
    };
}

export async function removeFriend(username: string, accessToken: string): Promise<MessageResponse & Successful> {
    const response = await fetch(`${baseUrl}/api/friend/${username}/remove/`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
    });
    const json: MessageResponse = await response.json();
    return {
        success: response.ok,
        message: json.message,
    };
}

export async function getReceivedFriendRequests(accessToken: string): Promise<FriendsResponse> {
    const response = await fetch(`${baseUrl}/api/friend/request/`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
    });
    return response.json();
}

export async function getFriends(accessToken: string): Promise<FriendsResponse> {
    const response = await fetch(`${baseUrl}/api/friend/`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
    });
    return response.json();
}

export async function getViolations(accessToken: string): Promise<Violation[]> {
    const response = await fetch(`${baseUrl}/api/violation/`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
    });
    return response.json();
}

export async function getUserViolations(username: string, accessToken: string): Promise<Violation[]> {
    const response = await fetch(`${baseUrl}/api/violation/${username}/`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
    });
    return response.json();
}

export async function getKilometersLeaderboard(pageNumber: number, order: Order, accessToken: string): Promise<UserResponse[]> {
    const response = await fetch(`${baseUrl}/api/leaderboard/km/${pageNumber}/`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
    });
    return response.json();
}

export async function getMinutesLeaderboard(pageNumber: number, order: Order, accessToken: string): Promise<UserResponse[]> {
    const response = await fetch(`${baseUrl}/api/leaderboard/minutes/${pageNumber}/`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
    });
    return response.json();
}

export async function getViolationsLeaderboard(pageNumber: number, order: Order, accessToken: string): Promise<(UserResponse & { violations: number })[]> {
    const response = await fetch(`${baseUrl}/api/leaderboard/violations/${pageNumber}/`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
    });
    return response.json();
}

