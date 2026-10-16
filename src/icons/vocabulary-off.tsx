"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 3h3a2 2 0 0 1 2 2a2 2 0 0 1 2 -2h6a1 1 0 0 1 1 1v13m-2 2h-5a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2h-6a1 1 0 0 1 -1 -1v-14c0 -.279 .114 -.53 .298 -.712"}],["path",{"d":"M12 5v3m0 4v9"}],["path",{"d":"M7 11h1"}],["path",{"d":"M16 7h1"}],["path",{"d":"M16 11h1"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"draw","n":[1],"o":[12,13],"st":0.07},{"fx":"pop","n":[0],"o":[12,12],"a":0.04}];

export const VocabularyOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
VocabularyOffIcon.displayName = "VocabularyOffIcon";
