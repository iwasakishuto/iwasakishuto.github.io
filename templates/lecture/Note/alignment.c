/* Needleman-Wunsch or Smith-Waterman */
#include <stdio.h>
#include <string.h>

int max(int x,int y,int z, int method){
  int tmp1 = x > y ? x : y;
  int tmp2 = tmp1 > z ? tmp1: z;
  if (method == 1){
    return tmp2;
  }else{
    return tmp2 > 0 ? tmp2: 0;
  }
}

// Extract Longest Common Sequence
void extract_alignment(char s1[], char s2[], int size1, int size2, int score[size1][size2], int i, int j, int lcs[], int* index){
  if (i<0 || j<0){
    return;
  }
  if (s1[i-1] == s2[j-1]){
    lcs[*index] = i-1;
    *index = *index+1;
    extract_alignment(s1, s2, size1, size2, score, i-1, j-1, lcs, index);
  }else{
    if (score[i-1][j] > score[i][j-1]){
      extract_alignment(s1, s2, size1, size2, score, i-1, j, lcs, index);
    }else{
      extract_alignment(s1, s2, size1, size2, score, i, j-1, lcs, index);
    }
  }
}

// Main
int main(){
  /* Input score */
  int a; printf("Match Score   : "); scanf("%d", &a);
  int b; printf("Mismatch Score: "); scanf("%d", &b);
  int g; printf("Gap Score     : "); scanf("%d", &g);
  /* Input Sequences */
  char s1[1000]; printf("Sequence 1    : "); scanf("%s", s1);
  char s2[1000]; printf("Sequence 2    : "); scanf("%s", s2);
  int method; printf("Needleman-Wunsch (global) → 1\nSmith-Waterman   (local)  → 2\nWhich do you want? : "); scanf("%d", &method);
  int len1 = strlen(s1);
  int len2 = strlen(s2);
  int SPscore[len1+1][len2+1];

  /* Dynamic programming */
  for(int i=0; i<=len1; i++){
    for(int j=0; j<=len2; j++){
      if (i==0 || j==0){
        SPscore[i][j] = 0; // Initialize
      }else if(s1[i-1] == s2[j-1]){
        SPscore[i][j] = max(SPscore[i-1][j-1]+a, SPscore[i][j-1]+g, SPscore[i-1][j]+g, method);
      }else{
        SPscore[i][j] = max(SPscore[i-1][j-1]+b, SPscore[i][j-1]+g, SPscore[i-1][j]+g, method);
      }
    }
  }

  /* Output results. */
  printf("\n[SP score matrix]\n");
  printf("         ");
  for (int j=0; j<=len2; j++){
    printf("%c   ", s2[j]);
  }
  printf("\n");
  for (int i=0; i<=len1; i++){
    if (i==0){
      printf("   ");
    }else{
      printf(" %c ", s1[i-1]);
    }
    for (int j=0; j<=len2; j++){
      printf("%3d ", SPscore[i][j]);
    }
    printf("\n");
  }

  /* Extract Longest Common Sequence. */
  if (method == 1){
    int lcs[len1];
    int index=0;
    extract_alignment(s1, s2, len1+1, len2+1, SPscore, len1, len2, lcs, &index);
    printf("\nLCS :");
    for (int i=index-1; i>=0; i--){
      printf("%c(%d)", s1[lcs[i]],lcs[i]+1);
    }
    printf("\n");
  }

  return 0;
}
