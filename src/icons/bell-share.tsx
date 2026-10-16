"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12.5 17h-8.5a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v2"}],["path",{"d":"M9 17v1a3 3 0 0 0 3 3"}],["path",{"d":"M16 22l5 -5"}],["path",{"d":"M21 21.5v-4.5h-4.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,3],"o":[18.5,19.5],"a":0.35,"dl":0.2},{"fx":"swing","n":[0],"o":[11,4],"a":12},{"fx":"tilt","n":[1],"o":[10.5,18],"a":7,"dl":0.07}];

export const BellShareIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BellShareIcon.displayName = "BellShareIcon";
