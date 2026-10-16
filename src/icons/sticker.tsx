"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 12l-2 .5a6 6 0 0 1 -6.5 -6.5l.5 -2l8 8"}],["path",{"d":"M20 12a8 8 0 1 1 -8 -8"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,12],"a":0.08},{"fx":"pop","n":[0],"o":[15.74,8.26],"a":0.22,"dl":0.1}];

export const StickerIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
StickerIcon.displayName = "StickerIcon";
