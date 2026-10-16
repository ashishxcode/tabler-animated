"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5"}],["path",{"d":"M11 16h-5a2 2 0 0 0 -2 2"}],["path",{"d":"M15 16l3 -3l3 3"}],["path",{"d":"M18 13v9"}]];
const rig: Rig[] = [{"fx":"nudge","n":[1,2,3],"o":[12.5,17.5],"d":[0,-2.4]}];

export const BookUploadIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BookUploadIcon.displayName = "BookUploadIcon";
