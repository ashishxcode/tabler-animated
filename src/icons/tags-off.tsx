"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16.296 12.296l-5.71 -5.71"}],["path",{"d":"M6 6h-1a2 2 0 0 0 -2 2v4.172a2 2 0 0 0 .586 1.414l5.71 5.71a2.41 2.41 0 0 0 3.408 0l3.278 -3.278"}],["path",{"d":"M18 19l.496 -.496"}],["path",{"d":"M20.384 16.367a4.822 4.822 0 0 0 -.792 -5.775l-4.592 -4.592"}],["path",{"d":"M7 10h-.01"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"pop","n":[2],"o":[18.25,18.75],"a":0.35,"dl":0.2},{"fx":"swing","n":[0,1,3,4],"o":[12,7],"a":7}];

export const TagsOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TagsOffIcon.displayName = "TagsOffIcon";
