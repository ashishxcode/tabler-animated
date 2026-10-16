"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1"}],["path",{"d":"M12 8v8"}],["path",{"d":"M16 12h3"}],["path",{"d":"M20 8h-4v8"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,3],"o":[12,12],"a":0.06},{"fx":"pop","n":[2],"a":0.24,"dl":0.1,"st":0.07,"os":[[17.5,12]]}];

export const GifIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GifIcon.displayName = "GifIcon";
