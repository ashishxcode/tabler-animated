"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 4h11a2 2 0 0 1 2 2v11m-1.172 2.821a1.993 1.993 0 0 1 -.828 .179h-14a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 1.156 -1.814"}],["path",{"d":"M7 8h1m4 0h5"}],["path",{"d":"M7 12h5m4 0h1"}],["path",{"d":"M7 16h9"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"draw","n":[1,2,3],"o":[12,12],"dl":0.05,"st":0.07},{"fx":"pop","n":[0],"o":[12,12],"a":0.04}];

export const ArticleOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArticleOffIcon.displayName = "ArticleOffIcon";
