PGDMP     8                     z            test-folkatech %   12.11 (Ubuntu 12.11-0ubuntu0.20.04.1)     14.2 (Ubuntu 14.2-1.pgdg20.04+1)     ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    492372    test-folkatech    DATABASE     e   CREATE DATABASE "test-folkatech" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
     DROP DATABASE "test-folkatech";
                postgres    false            ?            1259    492373    SequelizeMeta    TABLE     R   CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);
 #   DROP TABLE public."SequelizeMeta";
       public         heap    postgres    false            ?            1259    492388    tbl_access_tokens    TABLE     t  CREATE TABLE public.tbl_access_tokens (
    id bigint NOT NULL,
    user_id character varying(255),
    access_token character varying(500),
    access_token_expired_at timestamp with time zone,
    refresh_token character varying(500),
    del_status boolean NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);
 %   DROP TABLE public.tbl_access_tokens;
       public         heap    postgres    false            ?            1259    492386    tbl_access_tokens_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.tbl_access_tokens_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.tbl_access_tokens_id_seq;
       public          postgres    false    206            ?           0    0    tbl_access_tokens_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.tbl_access_tokens_id_seq OWNED BY public.tbl_access_tokens.id;
          public          postgres    false    205            ?            1259    492380 	   tbl_users    TABLE     H  CREATE TABLE public.tbl_users (
    id bigint NOT NULL,
    user_name character varying(200),
    account_number integer,
    email_address character varying(200),
    identity_number integer,
    del_status boolean NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);
    DROP TABLE public.tbl_users;
       public         heap    postgres    false            ?            1259    492378    tbl_users_id_seq    SEQUENCE     y   CREATE SEQUENCE public.tbl_users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.tbl_users_id_seq;
       public          postgres    false    204            ?           0    0    tbl_users_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.tbl_users_id_seq OWNED BY public.tbl_users.id;
          public          postgres    false    203                       2604    492391    tbl_access_tokens id    DEFAULT     |   ALTER TABLE ONLY public.tbl_access_tokens ALTER COLUMN id SET DEFAULT nextval('public.tbl_access_tokens_id_seq'::regclass);
 C   ALTER TABLE public.tbl_access_tokens ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    205    206    206                       2604    492383    tbl_users id    DEFAULT     l   ALTER TABLE ONLY public.tbl_users ALTER COLUMN id SET DEFAULT nextval('public.tbl_users_id_seq'::regclass);
 ;   ALTER TABLE public.tbl_users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    204    203    204            ?          0    492373    SequelizeMeta 
   TABLE DATA           /   COPY public."SequelizeMeta" (name) FROM stdin;
    public          postgres    false    202   >       ?          0    492388    tbl_access_tokens 
   TABLE DATA           ?   COPY public.tbl_access_tokens (id, user_id, access_token, access_token_expired_at, refresh_token, del_status, created_at, updated_at) FROM stdin;
    public          postgres    false    206   ?       ?          0    492380 	   tbl_users 
   TABLE DATA           ?   COPY public.tbl_users (id, user_name, account_number, email_address, identity_number, del_status, created_at, updated_at) FROM stdin;
    public          postgres    false    204   ?       ?           0    0    tbl_access_tokens_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.tbl_access_tokens_id_seq', 1, false);
          public          postgres    false    205            ?           0    0    tbl_users_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.tbl_users_id_seq', 8, true);
          public          postgres    false    203                       2606    492377     SequelizeMeta SequelizeMeta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public."SequelizeMeta" DROP CONSTRAINT "SequelizeMeta_pkey";
       public            postgres    false    202                        2606    492396 (   tbl_access_tokens tbl_access_tokens_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.tbl_access_tokens
    ADD CONSTRAINT tbl_access_tokens_pkey PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.tbl_access_tokens DROP CONSTRAINT tbl_access_tokens_pkey;
       public            postgres    false    206                       2606    492385    tbl_users tbl_users_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.tbl_users
    ADD CONSTRAINT tbl_users_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.tbl_users DROP CONSTRAINT tbl_users_pkey;
       public            postgres    false    204            ?   H   x?3202205?403646?M.JM,I?/Iʉ/-N-*??*?2?)17002AV????Z\_????R???? ???      ?      x?????? ? ?      ?   ?   x???=?0?99;jd??????	:?T?@ECz??!u?ޓ??UsL?????~?Mݵ????95?`?1??I???|?v?^@R?8???Tکi6??5??9?XBAl4\???mv????5.??u&T67???uX??o????r?v?=???PY(     