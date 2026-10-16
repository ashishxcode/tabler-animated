"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13.5 5.49a1.764 1.764 0 0 1 -2.5 -2.49"}],["path",{"d":"M12 6v3"}],["path",{"d":"M19 21a8.9 8.9 0 0 0 1 -3.67c0 -2 -.92 -3.25 -3.24 -4.51a17.4 17.4 0 0 1 -4.76 -3.82a17.4 17.4 0 0 1 -4.76 3.82c-2.32 1.26 -3.24 2.55 -3.24 4.51a8.9 8.9 0 0 0 1 3.67h14"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[12,15],"a":0.06},{"fx":"pop","n":[0,1],"a":0.24,"dl":0.1,"st":0.07,"os":[[11.99,4.5],[12,7.5]]}];

export const MosqueIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MosqueIcon.displayName = "MosqueIcon";
