"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18 18a3 3 0 0 0 3 -3v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3v8a3 3 0 0 0 3 3"}],["path",{"d":"M9 20h6l-3 -5l-3 5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,11],"a":0.08},{"fx":"pop","n":[1],"o":[12,17.5],"a":0.22,"dl":0.1}];

export const ShareplayIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ShareplayIcon.displayName = "ShareplayIcon";
