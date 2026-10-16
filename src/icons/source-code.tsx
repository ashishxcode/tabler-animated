"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14.5 4h2.5a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-5"}],["path",{"d":"M6 5l-2 2l2 2"}],["path",{"d":"M10 9l2 -2l-2 -2"}]];
const rig: Rig[] = [{"fx":"nudge","n":[1,2],"o":[8,7],"d":[-1.8,0]},{"fx":"nudge","n":[0],"o":[12,12],"d":[1.8,0]}];

export const SourceCodeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SourceCodeIcon.displayName = "SourceCodeIcon";
