"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5"}],["path",{"d":"M13 16h-7a2 2 0 0 0 -2 2"}],["path",{"d":"M15 19l3 3l3 -3"}],["path",{"d":"M18 22v-9"}]];
const rig: Rig[] = [{"fx":"nudge","n":[1,2,3],"o":[12.5,17.5],"d":[0,2.4]}];

export const BookDownloadIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BookDownloadIcon.displayName = "BookDownloadIcon";
