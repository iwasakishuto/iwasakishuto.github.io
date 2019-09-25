# ShellScripts

|ファイル名|役割|alias|
|:--|:--|:--|
|`WriteLectureNotes.sh`|`custom.css`やヘッダーを入れたMarkdownファイル生成する。※カテゴリ(講義)ごとにディレクトリに分ける。|wln|
|`gitUpdate.sh`|git add,commit,push を対話式で一括処理する。|gu|
|`scpDownUpload.sh`|`scp` コマンドでサーバーとファイルのやりとりを対話式に行う。||

## alias
```sh
$ alias gu='/Users/iwasakishuto/Github/portfolio/iwasakishuto.github.io/ShellScripts/gitUpdate.sh'
$ funcsave gu
# unalias
$ functions -e gu
```
