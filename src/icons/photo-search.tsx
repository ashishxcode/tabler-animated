"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 8h.01"}],["path",{"d":"M11.5 21h-5.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5"}],["path",{"d":"M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M20.2 20.2l1.8 1.8"}],["path",{"d":"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l2 2"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,3],"o":[18.5,18.5],"a":0.35,"dl":0.2},{"fx":"sweep","n":[0,1,4],"o":[12,12]}];

export const PhotoSearchIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PhotoSearchIcon.displayName = "PhotoSearchIcon";
