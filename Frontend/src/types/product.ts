export type ProjectStatus = 'EN_DEVELOPPEMENT' | 'EN_PRODUCTION' | 'ARCHIVE';

export interface ProductImageDto {
    id: number;
    imageUrl: string;
    caption?: string;
    displayOrder: number;
}

export interface ProductResponseDto {
    id: number;
    name: string;
    slug: string;
    tagline: string;
    description: string;
    valueProposition?: string;
    status: ProjectStatus;
    logoUrl?: string;
    websiteUrl?: string;
    repositoryUrl?: string;
    technologies: string[];
    images: ProductImageDto[];
    createdAt: string;
    updatedAt: string;
}

export interface ProductRequestDto {
    name: string;
    slug: string;
    tagline: string;
    description: string;
    valueProposition?: string;
    status: ProjectStatus;
    logoUrl?: string;
    websiteUrl?: string;
    repositoryUrl?: string;
    technologyIds: number[];
}