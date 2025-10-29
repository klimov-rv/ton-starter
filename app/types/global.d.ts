declare global {
  type UserWithoutPassword = Omit<User, 'password'>;

  interface User {
    id: number;
    is_activated: boolean;
    refer_id: any;
    legal: LegalEntity;
    legal_type: string;
    legal_class: string;
    avatar?: Avatar | null;
  }

  interface Account {
    id: number;
    email: string;
    is_activated: boolean;
    username: string;
    legal_type: string;
    phone: string; 
    refer_id: any;
    referral_percent: number;
    wallet_address: string;
    legal_class: string;
    avatar: Avatar;
    legal: LegalEntity;
    verification: any;
    socials: any[];
    fiat: any;
  }

  type LegalEntity = IndividualEntity | CompanyEntity;

  interface IndividualEntity {
    id: number;
    created_at: string;
    first_name: string;
    last_name: string;
    middle_name?: string;
    nikname: string;
    about?: string;
    website?: string;
    deleted_at: string | null;
    need_wallet: boolean;
    search_by_nickname: string;
    user: User;
    logo?: any;
    banner?: Banner;
  }
  
  interface CompanyEntity {
    id: number;
    created_at: string;
    name: string;
    inn: string;
    kpp?: string;
    payment_account: string;
    bik: string;
    personal_account?: string;
    correspondent_account?: string;
    address: string;
    ceo: string;
    name_brend: string;
    website?: string;
    info?: string;
    deleted_at: string | null;
    terminal?: string;
    shop_id?: string;
    logo?: any;
    user: User;
    okpo?: string;
    okato?: string;
    okved?: string;
    ogrn?: string;
  }

  interface Avatar {
    id: number;
    disk_name: string;
    file_name: string;
    file_size: number;
    content_type: string;
    title: any;
    description: any;
    field: string;
    sort_order: number;
    created_at: string;
    updated_at: string;
    path: string;
    extension: string;
  }
  interface Banner {
    id: number;
    disk_name: string;
    file_name: string;
    file_size: number;
    content_type: string;
    title: any;
    description: any;
    field: string;
    sort_order: number;
    created_at: string;
    updated_at: string;
    path: string;
    extension: string;
  }

  type ArticleResponse = Article[];

  interface Article {
    id: number;
    name: string;
    content: string;
    categories: string;
    order: any;
    slug: string;
    image: any;
    file: any;
  }

  interface Pagination<T> {
    data: T[];
    from: number;
    last_page: number;
    prev_page_url: string;
    next_page_url: string;
    last_page_url: string;
    total: number;
  }

  interface Token {
    // Обязательные поля
    id: number;
    name: string;
    description: string;
    price: string;

    user: User;
    collection: Collection;
    author: Author;

    type: string;
    is_hidden: boolean;
    is_sale: boolean;
    is_favorited: boolean;
    favorites_count: number;
    original_file: string;
    secret_key: string;
    created_at: string;
    updated_at: string;

    // Опциональные поля
    // Медиа-файлы
    upload_file?: UploadFile | null;
    preview_upload?: PreviewUpload | null;

    // Модерация
    moderation_status?: ModerationStatus | null;
    moderation_image?: any;
    reasons_rejection_id?: any;

    // Финансы
    commission_percent?: number;
    buy_percent?: number;
    royalty?: number;
    currency?: string;

    // Внешние ссылки
    external_address?: string | null;
    external_id?: string;
    link?: string;

    // Технические поля
    file_path?: string | null;
    preview?: string | null;

    // Неуточнённые
    hidden?: any;
    in_progress?: boolean;
    is_booked?: boolean;
    galleries?: any[];
    galleries_full?: any[];
    external_reference?: any;
    deleted_at?: string | null;
  }

  interface Collection {
    // Обязательные базовые поля
    id: number;
    name: string;
    description: string;
    tokens_count: number;
    is_favorited: boolean;
    created_at: string;
    updated_at: string;

    // Владелец
    user: User;

    // Токены
    tokens_collection?: {
      data: Token[];
    };

    // Медиа-данные
    preview?: Preview | null;
    background?: Background | null;
    preview_convert?: any;
    background_convert?: any;

    // Блокчейн
    trading: string | number;
    min_price?: string | number;
    royalty?: number;
    blockchain_id?: number | null;
    contract_address?: string;
    external_address?: string | null;

    // Модерация
    moderation_status?: ModerationStatus | null;
    moderation_preview?: any;
    moderation_background?: any;
    modarated_at?: string | null;
    reasons_rejection_id?: any;

    // Статусы
    is_produced: boolean;
    is_burnable?: boolean;

    // Даты и технические поля
    deleted_at?: string | null;

    // Неуточнённые
    is_default_collection?: boolean;
    category_id?: number;
    amount?: string;
    comment?: string;
    tokens_sales: number;
    export_at?: string | null;
  }

  interface Support {
    id: number;
    name: string;
    content: string;
    categories: string;
    order?: number;
    slug: string;
    image?: Image;
  }
  interface Image {
    id: number;
    disk_name: string;
    file_name: string;
    file_size: number;
    content_type: string;
    title: any;
    description: any;
    field: string;
    sort_order: number;
    created_at: string;
    updated_at: string;
    path: string;
    extension: string;
  }
  interface Author {
    id: number;
    is_activated: boolean;
    legal_type: string;
    refer_id: any;
    legal_class: string;
    legal: LegalEntity;
    avatar: Avatar;
  }
  interface Preview {
    id: number;
    disk_name: string;
    file_name: string;
    file_size: number;
    content_type: string;
    title: any;
    description: any;
    field: string;
    sort_order: number;
    created_at: string;
    updated_at: string;
    path: string;
    extension: string;
  }
  interface Background {
    id: number;
    disk_name: string;
    file_name: string;
    file_size: number;
    content_type: string;
    title: any;
    description: any;
    field: string;
    sort_order: number;
    created_at: string;
    updated_at: string;
    path: string;
    extension: string;
  }
  interface ModerationStatus {
    id: number;
    created_at: string;
    updated_at: string;
    name: string;
  }
  interface UploadFile {
    id: number;
    disk_name: string;
    file_name: string;
    file_size: number;
    content_type: string;
    title: any;
    description: any;
    field: string;
    sort_order: number;
    created_at: string;
    updated_at: string;
    path: string;
    extension: string;
  }
  interface PreviewUpload {
    id: number;
    disk_name: string;
    file_name: string;
    file_size: number;
    content_type: string;
    title: any;
    description: any;
    field: string;
    sort_order: number;
    created_at: string;
    updated_at: string;
    path: string;
    extension: string;
  }
  interface DefaultOctoberPage {
    id: number;
    name: string;
    content: string;
    categories: string;
    order: number;
    slug: string;
  }
  interface Video {
    id: number;
    disk_name: string;
    file_name: string;
    file_size: number;
    content_type: string;
    title: any;
    description: any;
    field: string;
    sort_order: number;
    created_at: string;
    updated_at: string;
    path: string;
    extension: string;
  }

  interface VideoPreview {
    id: number;
    disk_name: string;
    file_name: string;
    file_size: number;
    content_type: string;
    title: any;
    description: any;
    field: string;
    sort_order: number;
    created_at: string;
    updated_at: string;
    path: string;
    extension: string;
  }
}

export {};
