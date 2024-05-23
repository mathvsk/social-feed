import styles from './Post.module.css';

import { format, formatDistanceToNow } from 'date-fns';
import {ptBR} from 'date-fns/locale/pt-BR';

import {Comment} from "./Comment.tsx";
import {Avatar} from "./Avatar.tsx";
import {ChangeEvent, FormEvent, InvalidEvent, useState} from "react";

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps {
    post: PostType;
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState<string[]>([]);
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  });
  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true
  });
  const isNewCommentEmpty = newCommentText.length === 0;

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })

    setComments(commentsWithoutDeletedOne);
  }

  function handleCrateNewComment(event : FormEvent) {
    event.preventDefault()

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {post.content.map(line => {
          switch (line.type) {
            case 'paragraph':
              return <p key={line.content}>{line.content}</p>;
            case 'link':
              return <p key={line.content}><a href="#">{line.content}</a></p>;
            default:
              return null;
          }
        })}
      </div>
      <form onSubmit={handleCrateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comntário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment onDeleteComment={deleteComment} key={comment} content={comment} />
        })}
      </div>
    </article>
  );
}