"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 14l-2 -2l2 -2"}],["path",{"d":"M14 10l2 2l-2 2"}],["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0],"o":[9,12],"d":[-1.8,0]},{"fx":"nudge","n":[1,2],"o":[12,12],"d":[1.8,0]}];

export const CodeCircleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CodeCircleIcon.displayName = "CodeCircleIcon";
