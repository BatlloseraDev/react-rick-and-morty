interface Props {
    onLoadMore: () => void;
}

export const LoadMore = ({ onLoadMore }: Props) => {
    return (
        <div className="container-button-loadmore">
            <button onClick={onLoadMore} className="btn-loadmore">
                Cargar más
            </button>
        </div>
    );
};
