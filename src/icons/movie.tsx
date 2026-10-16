"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12"}],["path",{"d":"M8 4l0 16"}],["path",{"d":"M16 4l0 16"}],["path",{"d":"M4 8l4 0"}],["path",{"d":"M4 16l4 0"}],["path",{"d":"M4 12l16 0"}],["path",{"d":"M16 8l4 0"}],["path",{"d":"M16 16l4 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2,5],"a":0.25,"st":0.08,"os":[[8,12],[16,12],[12,12]]},{"fx":"pop","n":[3,4,6,7],"o":[12,12],"a":0.35,"dl":0.12},{"fx":"tilt","n":[0],"o":[12,12],"a":-3}];

export const MovieIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MovieIcon.displayName = "MovieIcon";
